import { getPerson } from './getPerson';
import { useEffect, useState, useReducer, useRef, useMemo, useCallback } from 'react';
import { Reset } from './Reset';

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

/* 
export function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerson().then((person) => {
      setLoading(false);
      setName(person.name);
    });
  }, []);

  function sillyExpensive() {
    console.log('execute silly');
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += i;
    }
    return sum;
  }

  const expensiveCalc = sillyExpensive();
  // not Using useMemo -> 컴포넌트가 처음 렌더링 될때와 버튼이 클릭되어 렌더링될때 모두 sillyExpensive()함수가 실행됨.

  const expensiveCalc = useMemo(() => sillyExpensive(), []);
  // Using useMemo -> 컴포넌트가 처음 렌더링 될때만 sillyExpensive()함수가 실행됨. (cuz 버튼이 클릭되었을때 memoized value가 대신 사용됨.)
 
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <p>{expensiveCalc}</p>
      <button onClick={() => setScore(score + 1)}> Add </button>
      <button onClick={() => setScore(score - 1)}> Subtract </button>
      <button onClick={() => setScore(0)}> Reset </button>
    </div>
  );
}
*/

//////////////////////////

/* type State = {
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
      <button ref={addButtonRef} onClick={() => dispatch({ type: 'increment' })}> Add </button>
      <button onClick={() => dispatch({ type: 'decrement' })}> Subtract </button>
      <button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
    </div>
  );
} */

////////////////

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

  const handleReset = useCallback(() => dispatch({ type: 'reset' }), []);

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
      <Reset onClick={handleReset} />
    </div>
  );
}
