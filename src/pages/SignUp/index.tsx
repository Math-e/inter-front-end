import { Wrapper, Background, InputContainer, ButtonContainer } from './styles'
import background from '../../assets/images/background-login.jpg'
import Card from '../../components/Card'
import logoInter from '../../assets/images/Inter-orange.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate, Link } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate()

    const handleToSignUp = () => {
        navigate('/dashboard')
    }

    return (
        <Wrapper>
            <Background image={background} />
            <Card width="403px">

                <img src={logoInter} width={172} height={61} alt="logo inter" />

                <InputContainer>
                    <Input placeholder="PRIMEIRO NOME" />
                    <Input placeholder="SOBRENOME" />
                    <Input placeholder="EMAIL" />
                    <Input placeholder="SENHA" type="password" />
                    <Input placeholder="CONFIRMAR SENHA" type="password" />
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSignUp} >Cadastrar</Button>
                    <p>Já tem conta? <Link to="/">Entre aqui.</Link></p>
                </ButtonContainer>

            </Card>
            SignIn
        </Wrapper>
    )
}

export default SignUp;
