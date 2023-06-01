import React from "react";
import { render, screen } from "@testing-library/react";
import { GifExpertapp } from "../../components/GifExpertApp";


const defaultCategoriesMocked = ['Hunter x Hunter', 'Sailor Moon', 'Ranma 1/2'];

describe('The functionality of the component GifExpertapp', () => { 
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should render correctly when categories are passed', () => { 
      render(<GifExpertapp defaultCategories={defaultCategoriesMocked} />)
      expect(screen.getAllByRole('heading', { level: 3 } ).length).toBe(defaultCategoriesMocked.length);
    });

    test('Should render correctly when no categories are passed', () => { 
        render(<GifExpertapp />)
        expect(screen.getAllByRole('heading', { level: 3 } ).length).toBe(2);
    });
});