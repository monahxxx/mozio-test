import { FormValues } from "../../../types/form";
import { useFormValues } from "../hooks";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const now = new Date();

const mockedFormValues: FormValues = {
  origin: "test origin",
  destinations: ["dest1", "dest2", "dest3"],
  passengers: 4,
  date: new Date(now.setDate(now.getDate() + 1)).toISOString(),
};

describe("SearchPage hooks", () => {
  it("should save form fields onto URL", () => {
    const { onSubmit } = useFormValues();
    onSubmit(mockedFormValues);
    const expectedPath = `/results?origin=test+origin&destinations=dest1%2Cdest2%2Cdest3&passengers=4&date=${encodeURIComponent(
      mockedFormValues.date
    )}`;
    expect(mockedUsedNavigate).toHaveBeenCalledWith(expectedPath);
  });
});
