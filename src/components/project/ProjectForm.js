

function ProjectForm() {
    return(
        <form>
            <div>
                <input type="text" placeholder="Enter prject name." />
            </div>
            <div>
                <input type="number" placeholder="Enter the total budget." />
            </div>
            <div>
                <select name="category_id">
                    <option disabled selected>Select a category</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Create project" />
            </div>
        </form>
    )
}

export default ProjectForm;