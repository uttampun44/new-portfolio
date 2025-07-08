import { render, screen } from "@testing-library/react"
import About from "../about/about"

describe('About Section Tests', () => {
    it('should render the About Section', () => {
        render(<About />)
        expect(true).toBe(true)

        const h1 = document.querySelector('h1')
        const p = document.querySelector('p')

        expect(h1).toBeInTheDocument()
        expect(p).toBeInTheDocument()

        expect(screen.queryByText('About Me')).toBeInTheDocument()
        expect(screen.queryByText('Explore my journey as a developer.')).toBeInTheDocument()
    })

})