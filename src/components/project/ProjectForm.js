import Input from '../form/Input'; // Importando Input
import Select from '../form/Select'; // Importando Select
import styles from './ProjectForm.module.css'; // Estilos para o ProjectForm
import SubmitButton from '../form/SubmitButton'; // Importando o componente SubmitButton

function ProjectForm({ btnText }) {
    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do Projeto"
            />
            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select name="category_id" text="Selecione uma categoria" />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ProjectForm;
