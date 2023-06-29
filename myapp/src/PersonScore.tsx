import { getPerson } from './getPerson';
import { useEffect, useState, useReducer, useRef } from 'react';

/* export function PersonScore() {
  useEffect(() => {
    getPerson().then((person) => console.log(person));
  }, []);
  return null;
} */

/////////////////////

/* export function PersonScore() {
    useEffect(async() => {
        const person = await getPerson();
        console.log(person)
    },[]) 
    return null;
} */

/////////////////////

/*  export function PersonScore() {
    useEffect(() => {
        async function getThePerson() {
        const person = await getPerson();
        console.log(person)
        }
        getThePerson()
    },[]) 
    return null;
}  */

///////////////////

/* export function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerson().then((person) => {
      setLoading(false);
      setName(person.name);
      console.log(loading, name) // true  undefined
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <button onClick={() => setScore(score + 1)}> Add </button>
      <button onClick={() => setScore(score - 1)}> Subtract </button>
      <button onClick={() => setScore(0)}> Reset </button>
    </div>
  );
}
 */

//////////////////////////

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
  | { type: 'initialize'; name: string }
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'initialize':
      return { name: action.name, score: 0, loading: false };
    case 'increment':
      return { ...state, score: state.score + 1 };
    case 'decrement':
      return { ...state, score: state.score - 1 };
    case 'reset':
      return { ...state, score: 0 };
    default:
      return state;
  }
}

export function PersonScore() {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });

  const addButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    getPerson().then(({ name }) => dispatch({ type: 'initialize', name }));
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <button ref={addButtonRef} onClick={() => dispatch({ type: 'increment' })}>
        {' '}
        Add{' '}
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}> Subtract </button>
      <button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
    </div>
  );
}
