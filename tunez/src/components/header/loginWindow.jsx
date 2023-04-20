import { StyledInput } from "../../assets/secondaryStyles";
import { useForm } from "../../hooks/useForm";

export const LoginWindow = () => {

    const {form, onChange} = useForm({user: "", password: ""})
    
  return (
    <div className="login">
      <form>
        <label htmlFor="user">Usuário: </label>
        <StyledInput
          name="user"
          id="user"
          type="text"
          value={form.user}
          onChange={onChange}
          required
        />
        <label htmlFor="password">Senha: </label>
        <StyledInput
          name="password"
          id="password"
          type="password"
          value={form.password}
          onChange={onChange}
          required
        />
      </form>
    </div>
  );
};
