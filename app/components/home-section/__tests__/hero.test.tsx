import { render, screen } from "@testing-library/react"
import Hero from "../hero/hero"

describe('hero section', () => {
    it('should render the hero section correctly', () => {
        render(<Hero />)
        expect(true).toBe(true)

        // test image
        const heroImage = document.querySelector('img[alt="hero_image"]')
        expect(heroImage).toBeInTheDocument()
        expect(screen.getByText('Uttam Pun!')).toBeInTheDocument()
        expect(screen.getByText('Contact Me')).toBeInTheDocument()
    })
})