import React, {Component} from "react";
import {Link} from 'react-router-dom';

// Xóa một sản phẩm

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'list': []
        };
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('list')) {
            let list = JSON.parse(localStorage.getItem('list'));
            this.setState({
                'list': list
            });
        }
    }

    createData = () => {
        let data = [
            {
                'id': this.randomIds(),
                'name': 'Tuấn anh',
                'status': 1, // ẩn
            },
            {
                'id': this.randomIds(),
                'name': 'Tuấn anh 2',
                'status': 2, // ẩn
            },
            {
                'id': this.randomIds(),
                'name': 'Tuấn anh 3',
                'status': 1, // ẩn
            }
        ];
        this.setState({
            'list': data
        });
        localStorage.setItem('list', JSON.stringify(data));
    };

    randoms = () => {
        return Math.random().toString(36).substr(2, 15);
    };

    // random mã cho id
    randomIds = () => {
        return this.randoms() + '-' + this.randoms() + '-' + this.randoms();
    };

    // Xóa sản phẩm
    deleteProduct = ({id}) => {
        let list = JSON.parse(localStorage.getItem('list'));
        list = list.filter(item => item.id !== id);
        localStorage.setItem('list', JSON.stringify(list));
        this.setState({
            'list': list
        })
    };

    render() {
        let {list} = this.state; // let list = this.state.list
        let _self = this;
        let get_data = list.map(function (currentValue, index, arr) {
            return (
                <React.Fragment key={currentValue.id}>
                    <tr>
                        <th scope="row">{currentValue.id}</th>
                        <td>{currentValue.name}</td>
                        <td>{currentValue.status == 1 ? 'ẩn' : 'Hiện'}</td>
                        <td>
                            <Link to={`/product/form/${currentValue.id}`} className="btn-light btn"> Chỉnh sửa</Link>
                            <button className="btn-dark btn"
                                onClick={() => _self.deleteProduct({'id': currentValue.id})}> Xóa
                            </button>
                        </td>
                    </tr>
                </React.Fragment>
            );
        });
        return (
            <React.Fragment>
                <div className="row page-title">
                    <div className="col-md-12">
                        <nav aria-label="breadcrumb" className="float-right mt-1">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Danh sách sản phẩm</li>
                            </ol>
                        </nav>
                        <h4 className="mb-1 mt-0">Danh sách sản phẩm</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <label htmlFor="">
                                                Tên sản phẩm
                                            </label>
                                            <input type="text" className="form-control" name="name"
                                                placeholder="Nhập họ tên"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <label htmlFor="">
                                                Trạng thái
                                            </label>
                                            <select name="status" id="" className="select2 form-control">
                                                <option value="">Chọn</option>
                                                <option value="1">ẩn</option>
                                                <option value="2">hiện</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div>
                                            <label htmlFor="" className=''>
                                                &nbsp;
                                            </label>
                                        </div>
                                        <button onClick={this.createData} className="btn btn-info">Add dữ liệu</button>
                                        &nbsp;
                                        <Link to="/product/form" className="btn btn-primary">Thêm mới sản phẩm</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-dark mb-0">
                                        <thead>
                                        <tr>
                                            <th scope="col">Mã sản phẩm</th>
                                            <th>Tên sản phẩm</th>
                                            <th>trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {get_data}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Index;