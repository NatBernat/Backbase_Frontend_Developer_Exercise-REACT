import { render, screen } from "@testing-library/react";
import PlaceWeather from "./PlaceWeather";

describe("Given placeWeather component", () => {
  describe("When it's instantiated", () => {
    test("Then it render 2 list items", () => {
      const placeData = { name: "Barcelona", temperature: 35, windSpeed: 12 };
      const expectedListItemsNumber = 2;

      render(<PlaceWeather place={placeData} />);

      const listItems = screen.getAllByRole("listitem");

      expect(listItems.length).toBe(expectedListItemsNumber);
    });
  });
});
