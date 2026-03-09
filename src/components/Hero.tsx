import ImageContent from "./ImageContent";

const Hero = () => {

    return(
        <ImageContent 
            title="Lorem Ipsum" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 
            1500s, when an unknown printer took a galley of type and scrambled it 
            to make a type specimen book." 
            image="/images/Hero-section.jpeg" 
            showButton={true}
            buttonText="Explore Collection"
            buttonLink="/variant"
        />

    )
}

export default Hero;