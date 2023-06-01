import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// Mock the getGifs helper function
jest.mock('../../helpers/getGifs', () => ({
  getGifs: jest.fn().mockResolvedValue([
    { id: '1', title: 'gif1', url: 'https://example.com/gif1.jpg' },
    { id: '2', title: 'gif2', url: 'https://example.com/gif2.jpg' },
  ]),
}));

describe('useFetchGifs', () => {
  test.skip('should return initial state with loading set to true', () => {
    const category = 'Dragon Ball';
    const { result } = renderHook(() => useFetchGifs(category));

    expect(result.current).toEqual({
      data: [],
      loading: true,
    });
  });

  test.skip('should return fetched data with loading set to false', async () => {
    const category = 'Dragon Ball';
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));

    await waitForNextUpdate(); // Wait for useEffect to complete

    expect(result.current).toEqual({
      data: [
        { id: '1', title: 'gif1', url: 'https://example.com/gif1.jpg' },
        { id: '2', title: 'gif2', url: 'https://example.com/gif2.jpg' },
      ],
      loading: false,
    });
  });

});
