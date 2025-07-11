import React from 'react';
import { render} from '@testing-library/react';
import Hero from '@components/home-section/hero/hero';
import About from '@components/home-section/about/about';
import Projects from '@components/home-section/projects/projects';


describe('page', () => {
    it('renders all the sections', () =>{
        render(<Hero />);
        render(<About />);
        render(<Projects />);
        expect(true).toBeTruthy();

        const heroElement = document.querySelector('.hero-container');
        const aboutElement = document.querySelector('.about-container')
        const projectsElement = document.querySelector('.project-container');

        expect(heroElement).toBeInTheDocument();
        expect(aboutElement).toBeInTheDocument();
        expect(projectsElement).toBeInTheDocument();
})
})
