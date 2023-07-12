import { useForm } from "react-hook-form";
import { NewPostData } from "./types";
import { ValidationError } from "./ValidationError";


type Props = {
    onSave: (newPost: NewPostData) => void;
}

export function NewPostForm({ onSave }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm<NewPostData>();

    return (
        <form
            noValidate
            onSubmit={handleSubmit(onSave)}
        >
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" {...register('title', {required: 'You must enter a title'})} />
                <ValidationError fieldError={errors.title} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea id="description" {...register('description', {required: 'You must enter the description'})} />
                <ValidationError fieldError={errors.description} />
            </div>
            <div>
                <button type="submit" disabled={isSubmitting}> Save </button>
                { isSubmitSuccessful && (<div role="alert"> The post was successfully saved </div>)}
            </div>
        </form>
    )
}

