interface TeacherSubjectCardProps {
    subject: string;
    code: string;
    Students: number;
    onSelect: (subject: string) => void;
    isSelected?: boolean;
}

export const SubjectCard: React.FC<TeacherSubjectCardProps> = ({subject,code,Students,onSelect,isSelected = false}) => {
    return (
        <div className="border border-black rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer bg-white"> 
            <div className="">
                <h4 className="text-2xl font-semi-bold mb-2">{subject}</h4>
                <div className="p-2">
                <p className="text-lg mb-1">Codigo: {code}</p>
                <p className="text-lg mb-1">Estudiantes Inscritos: {Students}</p>
           
                </div>
           </div>
         </div>
    );
    }