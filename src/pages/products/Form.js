import React, {Component} from "react";
import {Link} from 'react-router-dom';

// import
class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'name': '',
            'status': ''
        }
    }

    randoms = () => {
        return Math.random().toString(36).substr(2, 15);
    };

    randomIds = () => {
        return this.randoms() + '-' + this.randoms() + '-' + this.randoms();
    };

    componentWillMount() {
        if (this.props.match.params.id) {
            let id = this.props.match.params.id;
            let list = JSON.parse(localStorage.getItem('list'));
            let product = list.find(item => item.id === id);
            this.setState({
                'id': product.id,
                'name': product.name,
                'status': product.status,
            });
        }
    }

    saveDataForm = (event) => {
        event.preventDefault();
        if (localStorage && localStorage.getItem('list')) {
            let name = event.target.name.value;
            let status = event.target.status.value;
            let list = JSON.parse(localStorage.getItem('list'));
            if (event.target.id && event.target.id.value) {
                let key = list.findIndex(item => item.id === event.target.id.value);
                list[key].name = name;
                list[key].status = parseInt(status);
            } else {
                list.push({
                    'id': this.randomIds(),
                    'name': name,
                    'status': status,
                });
            }

            localStorage.setItem('list', JSON.stringify(list));
            this.setState({
                'list': list
            });
            alert('Bạn đã thêm mới thành công!');
            this.props.history.push('/product/list');
        }

    };

    render() {
        let {id, name, status} = this.state;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title mt-0">Thêm mới</h4>
                                <p className="sub-header">
                                    Điền đầy đủ thông tin
                                </p>
                                <form className="form-horizontal" onSubmit={this.saveDataForm}>
                                    <input type="hidden" name="id" defaultValue={id ? id : ''}/>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group row">
                                                <label className="col-lg-2 col-form-label"
                                                    htmlFor="simpleinput">Họ và tên</label>
                                                <div className="col-lg-10">
                                                    <input type="text" name="name" className="form-control"
                                                        defaultValue={name ? name : ''}
                                                        placeholder="Họ và tên..."/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-2 col-form-label"
                                                    htmlFor="example-email">Email</label>
                                                <div className="col-lg-10">
                                                    <select defaultValue={status ? status : ''} name="status"
                                                        className="form-control custom-select">
                                                        <option value="">Chọn</option>
                                                        <option value="1">Ẩn</option>
                                                        <option value="2">Hiện thị</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn btn-primary">Thêm mới</button>
                                            &nbsp;
                                            <Link className="btn btn-danger" to="/product/list">Hủy bỏ</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Form;