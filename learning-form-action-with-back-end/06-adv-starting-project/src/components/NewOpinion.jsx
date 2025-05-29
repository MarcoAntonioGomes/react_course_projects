import { useActionState } from "react";
import { isNotEmpty } from "../util/validation";
import { use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import { Submit } from "./Submit";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function submitOpinionFormAction(prevFormState, formData) {
    let userName = formData.get("userName");
    let title = formData.get("title");
    let body = formData.get("body");

    let errors = [];
    if (!isNotEmpty(userName)) {
      errors.push("Name is required");
    }
    if (!isNotEmpty(title)) {
      errors.push("Title is required");
    }
    if (!isNotEmpty(body)) {
      errors.push("Body is required");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body,
        },
      };
    }

    await addOpinion({
      userName,
      title,
      body,
    });

    return { errors: null };
  }

  const [formState, formAction] = useActionState(submitOpinionFormAction, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValues?.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <Submit />
      </form>
    </div>
  );
}
