import {useState} from 'react';
import femaleProfile from '../assets/imgs/femaleProfile.jpg'
import maleProfile from '../assets/imgs/maleProfile.jpg'

const Employees = () => {
    
    let employeesArr = [
        {id: 1, fullName: 'Ethel Pierce', designation: 'mad', gender: 'male', teamName: 'TeamA'},
        {id: 2, fullName: 'Lily Pittman', designation: 'dark', gender: 'female', teamName: 'TeamA'},
        {id: 3, fullName: 'Kevin Bowen', designation: 'suggest', gender: 'male', teamName: 'TeamA'},
        {id: 4, fullName: 'Vincent Ward', designation: 'brought', gender: 'male', teamName: 'TeamB'},
        {id: 5, fullName: 'Sophia Williams', designation: 'essential', gender: 'female', teamName: 'TeamA'},
        {id: 6, fullName: 'Louisa Barker', designation: 'duck', gender: 'female', teamName: 'TeamB'},
        {id: 7, fullName: 'Theodore Garrett', designation: 'shoulder', gender: 'male', teamName: 'TeamB'},
        {id: 8, fullName: 'Essie Walters', designation: 'make', gender: 'female', teamName: 'TeamB'},
        {id: 9, fullName: 'Dorothy Fletcher', designation: 'central', gender: 'female', teamName: 'TeamC'},
        {id: 10, fullName: 'Gerald Marshall', designation: 'attempt', gender: 'male', teamName: 'TeamC'},
        {id: 11, fullName: 'Bruno Mars', designation: 'attempt', gender: 'male', teamName: 'TeamC'},
    ]

    const [employees, setEmployees] = useState(employeesArr);
    return (
        <main className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-8'>
                    <div className='card-collection'>
                        {
                            employees.map((employee) => (
                                <div id={employee.id} key={employee.id}className='card m-1' style={{cursor: 'pointer'}}>
                                {<img src={employee.gender === 'male' ? maleProfile : femaleProfile} className='card-img-top'/>}
                                    <div className='card-body'>
                                        <h5 className='card-title'>{employee.fullName}</h5>
                                        <p className='card-text'><b>Designation: </b>{employee.designation}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )

}

export default Employees