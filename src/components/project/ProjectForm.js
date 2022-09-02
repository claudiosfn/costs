function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Nome do Projeto"></input>
            </div>
            <div>
                <input type="number" placeholder="Orçamento total"></input>
            </div>
            <div>
                <select name="category_id">
                    <option disabled>Selecione a categoria do Projeto</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto"></input>
            </div>
        </form>
    )
}

export default ProjectForm