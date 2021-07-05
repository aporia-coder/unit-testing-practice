import {
  render,
  fireEvent,
  screen,
  cleanup,
  waitForDomChange,
  debug,
} from "@testing-library/react";
import App from "../../App";

afterEach(cleanup);

describe("Testing our Todo application", () => {
  test("App should render on the page", () => {
    render(<App />);
  });
  test("input should render and contain the correct placeholder text", () => {
    const { getByPlaceholderText } = render(<App />);
    const inputField = screen.getByPlaceholderText("Add a Todo");
    expect(inputField).toBeInTheDocument();
  });
  test("check submit button is in the dom", () => {
    const { getByTestId } = render(<App />);
    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();
  });
  test("check Todo is in the DOM after form is submitted", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
    const submitButton = screen.getByTestId("submit-button");
    const inputField = screen.getByPlaceholderText("Add a Todo");
    fireEvent.change(inputField, { target: { value: "Do the washing up" } });
    fireEvent.click(submitButton);
    const todo = getByText("Do the washing up");
    expect(todo).toBeInTheDocument();
  });
});
