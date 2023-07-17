/* eslint-disable testing-library/no-unnecessary-act */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { SearchPage } from "../SearchPage";

const mockedUsedNavigate = jest.fn();
const mockedSubmit = jest.fn();

jest.mock("../hooks", () => {
  return {
    useFormValues: () => ({
      initialValues: {
        origin: "",
        destinations: [""],
        date: "",
        passengers: 0,
      },
      onSubmit: mockedSubmit,
    }),
  };
});

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("SearchPage form", () => {
  it("should call the onSubmit", async () => {
    render(<SearchPage />);
    const originInput = screen.getByLabelText("City of origin");
    const destinationInput = screen.getByLabelText("City of destination");
    const passengersInput = screen.getByLabelText("Passengers");
    const dateInput = screen.getByLabelText("Date");
    const submit = screen.getByRole("button", {
      name: "Submit",
    });

    await act(async () => {
      fireEvent.change(originInput, { target: { value: "Paris" } });
      fireEvent.change(destinationInput, { target: { value: "Lille" } });
      fireEvent.change(passengersInput, { target: { value: 3 } });
      fireEvent.change(dateInput, { target: { value: "2024-01-01" } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });
    expect(mockedSubmit).toHaveBeenCalled();
  });

  it("should validate required fields", async () => {
    render(<SearchPage />);
    const submit = screen.getByRole("button", {
      name: "Submit",
    });

    await act(async () => {
      fireEvent.click(submit);
    });
    screen.getByText("You must choose the city of origin");
    screen.getByText("You must choose the city of destination");
    screen.getByText("Select passengers");
    screen.getByText("Select date");
    expect(mockedSubmit).not.toHaveBeenCalled();
  });

  it("should validate date", async () => {
    render(<SearchPage />);
    const dateInput = screen.getByLabelText("Date");
    const submit = screen.getByRole("button", {
      name: "Submit",
    });

    await act(async () => {
      fireEvent.change(dateInput, { target: { value: "2022-01-01" } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });
    screen.getByText("Please choose future date");
    expect(mockedSubmit).not.toHaveBeenCalled();
  });

  it("should add more destination", async () => {
    render(<SearchPage />);
    const addDestination = screen.getByRole("button", {
      name: "Add destination",
    });

    await act(async () => {
      fireEvent.click(addDestination);
    });

    expect(screen.getAllByLabelText("City of destination").length).toBe(2);
  });
});
