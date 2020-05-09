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

    saveDataForm = (event) => {
        event.preventDefault();
        if (localStorage && localStorage.getItem('list')) {
            let name = event.target.name.value;
            let status = event.target.status.value;
            let list = JSON.parse(localStorage.getItem('list'));
            list.push({
                'id': this.randomIds(),
                'name': name,
                'status': status ,
            });
            localStorage.setItem('list', JSON.stringify(list));
            this.setState({
                'list' : list
            });
            alert('Bạn đã thêm mới thành công!');
            this.props.history.push('/product/list');
        }
    };

    render() {
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
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group row">
                                                <label className="col-lg-2 col-form-label"
                                                    htmlFor="simpleinput">Họ và tên</label>
                                                <div className="col-lg-10">
                                                    <input type="text" name="name" className="form-control"
                                                        placeholder="Họ và tên..."/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-2 col-form-label"
                                                    htmlFor="example-email">Email</label>
                                                <div className="col-lg-10">
                                                    <select name="status" className="form-control custom-select">
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