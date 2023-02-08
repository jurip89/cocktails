import { render, screen } from "@testing-library/react";
import { SearchForm } from "../components";

describe('DrinkCard.jsx', () => {
    it('should render', () => {
        render(<SearchForm />)
        screen.debug()
    });
    it('should render a button', async () => {
        render(<SearchForm />)
        const button = screen.getByRole('button', { hidden: false })
        expect(button).toBeInTheDocument()
    });
    it('should render a form', async() => {
        render(<SearchForm/>)
        const form = screen.getByRole('form',{hidden:false})
        expect(form).toBeInTheDocument()
    })
})