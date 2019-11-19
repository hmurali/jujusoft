const expect = require('chai').expect
const axios = require('axios')
const baseUrl = 'http://localhost:3000'


let userid = ""


describe('/users', () => {
    it('post/users should return an object', done => {
        const user = {email: 'user@example.com', password: '1234'}
        axios.post(`${baseUrl}/users`, user)
            .then(res => {
                userid = res.data._id
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })
    it('get/users should return an object', done => {
        axios.get(`${baseUrl}/users`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })

    it('get/users/:userid should return an object', done => {
        axios.get(`${baseUrl}/users/${userid}`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })

    it('put/users/:userid should return an object', done => {
        axios.put(`${baseUrl}/users/${userid}`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })
    it('delete/users/:userid should return an object', done => {
        axios.delete(`${baseUrl}/users/${userid}`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })
})

const newComputer = {
    ip: '192.168.1.23',
    name: 'a fake computer'
}

describe('/computer', () => {
    it('post/computer should return an object', done => {
        axios.post(`${baseUrl}/computer`, newComputer)
            .then(res => {
                newComputer._id = res.data._id
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })
    it('get/computer/:computerid should return an object', done => {
        axios.get(`${baseUrl}/computer/${newComputer._id}`)
        .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                expect(res.data).to.haveOwnProperty('ip').eq(newComputer.ip)
                expect(res.data).to.haveOwnProperty('name').eq(newComputer.name)
                done()
            })
    })
    it('get/computer should return an object', done => {
        axios.get(`${baseUrl}/computer`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })
    it('put/computer/:computerid should return an object', done => {
        axios.put(`${baseUrl}/computer/jkjhjkid`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })
    it('delete/computer/:computerid should return an object', done => {
        axios.delete(`${baseUrl}/computer/${newComputer._id}`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
            .catch(err => console.error(err))
    })

}) 