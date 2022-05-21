import React from 'react'
import Projects from '../Projects/Projects'
import {Element} from 'react-scroll'
import './ProjectContainer.css'

function ProjectContainer() {
    const project=[
        {
            img:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
            title:"first project",
             desc:'Your 4k Text stock images are ready. Download all free or royalty-free photos and images. Use them in commercial desig',
             link:'www.google.com'

        },
        {
            img:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
            title:"first project",
             desc:'Your 4k Text stock images are ready. Download all free or royalty-free photos and images. Use them in commercial desig',
             link:'www.google.com'
        },
        {
            img:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
            title:"first project",
             desc:'Your 4k Text stock images are ready. Download all free or royalty-free photos and images. Use them in commercial desig',
             link:'www.google.com'
        },
        {
            img:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
            title:"first project",
             desc:'Your 4k Text stock images are ready. Download all free or royalty-free photos and images. Use them in commercial desig'
        },
        {
            img:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
            title:"first project",
             desc:'Your 4k Text stock images are ready. Download all free or royalty-free photos and images. Use them in commercial desig'
        },
        {
            img:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
            title:"first project",
             desc:'Your 4k Text stock images are ready. Download all free or royalty-free photos and images. Use them in commercial desig',
             link:'www.google.com'
        },
    ]
  return (


    <Element className='projectContainer' id='projects'>

        <h1>Projects</h1>
        <p>Here Are Some Projects Which I done for making Lives of People Easy</p>
        <div className='projectContainer__projects'>

            {
                project.map((projects)=>{
                    return(
                        <Projects title={projects.title} 
                        img={projects.img}
                         link={projects.link} 
                         desc={projects.desc}  />
                    )
                })
            }


        </div>
    </Element>
  )
}

export default ProjectContainer