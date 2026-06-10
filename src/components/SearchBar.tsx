
interface SearchBarProps {
    onSearch: (valor: string) => void;




}


export function SearchBar({ onSearch }: SearchBarProps) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newSearch: string = formData.get("pesquisa") as string;
        onSearch(newSearch);
    }
    return (
        <header>
            <h1>MovieFinder</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="titulo"> Nome do filme:</label>
                    <input type="text" id="titulo" name="pesquisa" required />
                    <button type='submit'> Pesquisar</button>
                </div>
            </form>
        </header>
    )

}