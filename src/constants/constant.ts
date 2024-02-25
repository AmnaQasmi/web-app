import { UserObject } from "@/models/User";
import { NavItems } from "@/models/Header";

export const userInfo : UserObject = {
    name: 'AMNA QASMI',
    picture: 'https://pxbar.com/wp-content/uploads/2023/09/dp-images-for-girls-cartoon-1-1024x1024.jpg',
    heading: 'I&#39;m a Software Engineer based in Pakistan, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, desktop applications, and corporate software, leveraging cutting-edge technologies to drive innovation and enhance business processes.',
    about: `
        <p>I am a passionate Software Engineer with a background in Web Development, I have been crafting digital experience in Generative AI , Metaverse and Web 3.0 for 1 year.</p>
            <p>My journey in IT began in 2023 since then, I've had the privilege to learn Generative AI , Metaverse and Web 3.0 from PIAIC Organization , allowing me to refine my skills and approach to problem-solving.</p>
            <p> I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>
            `,
    skills: ['React', 'Next Js', 'Data Structure', 'JavaScript', 'HTML', 'CSS']
}
export const headerItems : NavItems= {
    home: {label:'Home' , page:'home'},
    about: {label:'About' , page:'about'},
    projects: {label:'Project' , page:'projects'}
}
export const projects = {
    gmail: { image: 'https://i.ibb.co/3y7mjqn/gmail-clone.jpg' },
    flipkart: { image: 'https://i.ibb.co/QDt04mP/maxresdefault.jpg' },
    google: { image: 'https://i.ibb.co/RHpgMcC/google-clone-next.jpg' },
    indeed: { image: 'https://i.ibb.co/tHkM8dD/indeed-clone.jpg' },
    crud: { image: 'https://i.ibb.co/wS41qv7/crud-fullstack.jpg' },
    aws: { image: 'https://i.ibb.co/61756n7/aws-3.jpg' },
    notes: { image: 'https://i.ibb.co/wCN5CVj/notesapp.jpg' }
}