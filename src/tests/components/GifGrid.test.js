import React from "react";
import { render, screen } from "@testing-library/react";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";


jest.mock('../../hooks/useFetchGifs');

const category = "Dragon Ball";

const dataMocked = [
  {id: 'ABC', url: 'https://test-url.com/imageABC.jpg', title: 'imageABC'},
  {id: 'DFG', url: 'https://test-url.com/imageDFG.jpg', title: 'imageDFG'},
  {id: 'HIJ', url: 'https://test-url.com/imageHIJ.jpg', title: 'imageHIJ'},
  {id: 'KLM', url: 'https://test-url.com/imageKLM.jpg', title: 'imageKLM'},
];

describe("GifGrid component", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders GifGrid component with loading state", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  test("renders images when useFetchGifs finish", () => {
    useFetchGifs.mockReturnValue({
      data: dataMocked,
      loading: false,
    });
    render(<GifGrid category={category} />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    expect(screen.getAllByRole('img').length).toBe(dataMocked.length);
  });
});
