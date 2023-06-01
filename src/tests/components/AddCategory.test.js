import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en <AddCategory />', () => { 
    const setCategories = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        render(<AddCategory setCategories={setCategories} />);
    });

    test('Should render correctly', () => {
       expect(screen.getByRole('textbox', { name: 'Search a gif' })).toBeVisible();
    });

    test('Should render correctly when a category is passed', async () => {
        const inputElement = screen.getByRole('textbox', { name: 'Search a gif' });
        fireEvent.change(inputElement, {target: {value: 'Sailor Moon'}});
        expect(inputElement.value).toBe('Sailor Moon');
    });

    test('handles form submission correctly', () => {
        const inputElement = screen.getByRole('textbox', { name: 'Search a gif' });
        fireEvent.change(inputElement, { target: { value: 'One Piece' } });
        fireEvent.submit(inputElement);
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(inputElement.value).toBe('');
    });

    test('does not call setCategories if input value is less than 3 characters', () => {
        const inputElement = screen.getByRole('textbox', { name: 'Search a gif' });
        fireEvent.change(inputElement, { target: { value: 'DB' } });
        fireEvent.submit(inputElement);
        expect(setCategories).not.toHaveBeenCalled();
        expect(inputElement.value).toBe('DB');
      });

 })