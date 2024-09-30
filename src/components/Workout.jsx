import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

const Workout = (props) => {

    const {workout} = props;
  return (
    <SectionWrapper id={'workout'} header={"Welcome to"} title={['The', 'DANGER', 'Zone']}>
        <div className="flex flex-col gap-4">
            {workout.map((exercise,i) => {
                return(
                    <ExerciseCard i={i} exercise={exercise} key={i}/>
                )
            })}
        </div>
    </SectionWrapper>
  )
}

export default Workout