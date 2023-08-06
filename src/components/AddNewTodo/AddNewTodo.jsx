import { Component } from 'react';
import styles from './addNewTodo.module.css'

class AddNewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            error: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, description } = this.state;
        if (title && title.length > 1) {
            this.props.addTodo(title, description);
            this.setState({
                title: '',
                description: '',
            });
            this.props.close()
        } else {
            this.setState({ error: true })
        }
    };

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
        this.setState({ error: false })
    };

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value,
        });
    };

    render() {
        const { title, description, error } = this.state;

        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <h2 className={styles.title}>Новое дело:</h2>
                {error && <p className={styles.error}>Введите минимум 2 символа в заголовок</p>}
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Заголовок"
                    value={title}
                    onChange={this.handleTitleChange}
                />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Описание"
                    value={description}
                    onChange={this.handleDescriptionChange}
                />
                <button className={styles.btn} type="submit">Добавить</button>
            </form>
        );
    }
}

export default AddNewTodo;