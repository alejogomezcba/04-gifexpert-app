import React from "react";
import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../components/GifGridItem";


const url = "https://test.com/prueba.jpg";
const id = 1111;
const title = "test category title";



describe("GifGridItem component", () => {
  test("renders GifGridItem component with default Props", () => {
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeVisible();  
    const imgTestUrl = screen.getByRole('img', { name: 'test category title' } ).src; 
    expect(imgTestUrl).toBe(url);
  });

  test("find class", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    const element = container.getElementsByClassName('animate__fadeIn');
    const arr = [].slice.call(element);
    expect(arr[0].className).toBe('card animate__animated animate__fadeIn');
  });

 
});
