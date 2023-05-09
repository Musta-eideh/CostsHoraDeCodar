

function ProjectForm() {
    return(
        <form>
            <input type="text" placeholder="Enter prject name." />

            <input type="number" placeholder="Enter the total budget." />
            <select name="category_id">
                <option>Select a category</option>
            </select>
        </form>
    )
}

export default ProjectForm;