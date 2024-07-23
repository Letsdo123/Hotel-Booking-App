import './App.css'
import { Button } from '@material-tailwind/react'
import { NavMenu } from './components/header/NavMenu'
import CustomInput from './components/utils/CustomInput'
import CustomDateRangePicker from './components/utils/CustomDateRangePicker'

function App() {

  const inputJson = [
    {
      id: 1,
      label: "Password",
      type: "password",
      placeholder: "Password",
      disabled: false,
      inputDescription: "8 chars"
    },
    {
      id: 2,
      label: "Username",
      type: "text",
      placeholder: "Username",
      disabled: false,
      inputDescription: "6 chars"
    },
    {
      id: 3,
      label: "Email",
      type: "email",
      placeholder: "Email",
      disabled: true
    },
  ]

  return (
    <>
      <div className='container-fluid'>
        <NavMenu />
        <div className='grid grid-cols-2 gap-4 justify-items-center'>
          <div className='m-2'>
            {inputJson.map(({ id, label, type, placeholder,inputDescription, disabled,onChange }) => (
              <CustomInput
                key={id}
                id={id}
                label={label}
                type={type}
                placeholder={placeholder}
                inputDescription={inputDescription}
                disabled={disabled}
                onChange={onChange && onChange}
              />
            ))}
            <CustomDateRangePicker />
          </div>
          
          <div className='m-2'>
            <Button>Button</Button>
          </div>

        </div>
      </div>



    </>
  )
}

export default App
