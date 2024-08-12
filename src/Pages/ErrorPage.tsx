import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const routeError = useRouteError();
  const error = routeError as { statusText?: string; status?: number };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>
          {error?.status} - {error?.statusText}
        </i>
      </p>
    </div>
  );
};
