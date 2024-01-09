import Title from '../../components/Title';

export default function usingTitles(){
    return(
        <div>
            <Title 
                principal = "Another example of Form Page"
                secondary = "Playing on React/Next"
                small     
            />
            <Title 
                principal = "Form Page"
                secondary = "CRUD"
            />
            <Title 
                principal = "Another example of Form Page"
                secondary = "Playing on React/Next"
                small     = {true}
            />
        </div>
    );
}