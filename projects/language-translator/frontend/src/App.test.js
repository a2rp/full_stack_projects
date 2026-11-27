import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios', () => ({
    __esModule: true,
    default: { post: jest.fn() },
}));

test('translates text using the selected source and target languages', async () => {
    axios.post.mockResolvedValue({
        data: { success: true, translatedText: 'Bonjour' },
    });

    render(<App />);

    expect(screen.getByRole('heading', { name: 'Language Translator' })).toBeInTheDocument();

    fireEvent.change(screen.getByRole('textbox', { name: 'Text to translate' }), {
        target: { value: 'Hello' },
    });
    fireEvent.change(screen.getByLabelText('Translate to'), { target: { value: 'fr' } });
    fireEvent.click(screen.getByRole('button', { name: 'Translate text' }));

    await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith(
            'http://localhost:1198/api/v1/translate',
            { from: 'en', to: 'fr', text: 'Hello' },
            { timeout: 20000 },
        );
        expect(screen.getByRole('textbox', { name: 'Translation' })).toHaveValue('Bonjour');
    });
});
