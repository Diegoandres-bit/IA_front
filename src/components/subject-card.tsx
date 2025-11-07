interface SubjectCardProps {
    subject: string;
    teacher: string;
    criteria: number;
    finalGrade: number;
    onSelect: (subject: string) => void;
    isSelected?: boolean;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({subject,teacher,criteria,finalGrade,onSelect,isSelected = false}) => {
    return (
        <div className="border border-black rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer bg-white"> 
            <div className="">
                <h4 className="text-2xl font-semi-bold mb-2">{subject}</h4>
                <div className="p-2">
                <p className="text-lg mb-1">Profesor: {teacher}</p>
                <p className="text-lg mb-1">Criterios de Evaluación: {criteria}</p>
                <p className="text-lg mb-1">Calificación Final: {finalGrade}</p>
           
                </div>
           </div>
         </div>
    );
    }