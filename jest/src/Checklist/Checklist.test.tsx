import { render, screen } from "@testing-library/react";
import { Checklist } from "./Checklist";
import userEvent from "@testing-library/user-event";
import { IdValue } from "./types";

test("should render correct list items when data specified", () => {
  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
    />
  );
  expect(screen.getByText("Lucy")).toBeInTheDocument();
  expect(screen.getByText("Manager")).toBeInTheDocument();
});

/////////////////

test("should render correct list items when renderItem spcified", () => {
  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
      renderItem={(item) => (
        <li key={item.id}>
          {item.name}-{item.role}
        </li>
      )}
    />
  );
  expect(screen.getByText("Lucy-Manager")).toBeInTheDocument();
});

////////////////

test("should render correct checked items when specified", () => {
  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
      checkedIds={[1]}
    />
  );
  expect(screen.getByTestId("Checklist__input__1")).toBeChecked(); // toBeChecked() verifies the checkbox is checked
});

//////////////////

test("should check items when clicked", async () => {
  // the simulated user interactions in userEvent are asynchronous
  const user = userEvent.setup(); // initialize the user simulation
  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
    />
  );
  const lucyCheckbox = screen.getByTestId("Checklist__input__1");
  expect(lucyCheckbox).not.toBeChecked();
  await user.click(lucyCheckbox);
  expect(lucyCheckbox).toBeChecked();
});

/////////////////////

test("should call onCheckedIdsChange when clicked", async () => {
  const user = userEvent.setup();
  let calledWith: IdValue[] | undefined = undefined;

  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
      onCheckedIdsChange={(checkedIds) => (calledWith = checkedIds)}
    />
  );
  await user.click(screen.getByTestId("Checklist__input__1"));
  expect(calledWith).toStrictEqual([1]);
});

//////////////

test("Should check and uncheck items when clicked", async () => {
  const user = userEvent.setup();
  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
    />
  );
  const lucyCheckbox = screen.getByTestId("Checklist__input__1");
  await user.click(lucyCheckbox);
  expect(lucyCheckbox).toBeChecked();
  await user.click(lucyCheckbox);
  expect(lucyCheckbox).not.toBeChecked();
});
