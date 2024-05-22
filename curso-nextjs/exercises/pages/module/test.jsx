import Standard, { Comp1, Comp2 as BlaBla, Comp4, Comp5, Comp6, Comp7} from "../../components/module/functional"

export default function test(){
    return(
        <div>
            <Comp1 />
            <BlaBla />
            <Standard />
            <Comp4 />
            <Comp5 />
            <Comp6 />
            <Comp7 msg="Cool!"/>
        </div>
    );
}