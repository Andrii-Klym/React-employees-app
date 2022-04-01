import './app-info.css';

const AppInfo = ({increase, employees}) => {
    return (
        <div className="app-info">
            <h1>Облік співробітників в компанії N</h1>
            <h2>Загальне число співробітників: {employees}</h2>
            <h2>Премію отримають: {increase}</h2>
        </div>
    )
}

export default AppInfo;
