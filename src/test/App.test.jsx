import { render,screen } from "@testing-library/react";
import { Home } from "../pages";

describe('App.js', () => {
    it('should render', () => {
        render(<Home />);
        screen.debug()
    });
    it('check if the section element is in the screen', () => {
        render(<Home />);
        const section = screen.getByRole('contentinfo',{hidden:false});
        expect(section).toBeInTheDocument()
    })
});

