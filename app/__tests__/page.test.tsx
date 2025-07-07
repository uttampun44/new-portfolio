import React from 'react';
import { render } from '@testing-library/react';
import Hero from '@components/home-section/hero/hero';
import About from '@components/home-section/about/about';
import Experience from '@components/home-section/experience/experience';
import Projects from '@components/home-section/projects/projects';

describe('page', () => {
    it('renders all the sections', () =>{
        render(<Hero />);
        render(<About />);
        render(<Experience />);
        render(<Projects />);
        expect(true).toBeTruthy();

        const heroElement = document.querySelector('.hero-container');
        const aboutElement = document.querySelector('.about-container')
        const experienceElement = document.querySelector('.experience-container');
        const projectsElement = document.querySelector('.project-container');

        expect(heroElement).toBeInTheDocument();
        expect(aboutElement).toBeInTheDocument();
        expect(experienceElement).toBeInTheDocument();
        expect(projectsElement).toBeInTheDocument();
})
})
