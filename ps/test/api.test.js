const expect = require('chai').expect
const axios = require('axios')
const baseUrl = 'http://localhost:3000'



describe('/users', () => {
    it('get/users should return an object', done => {
        axios.get(`${baseUrl}/users`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })
    it('post/users should return an object', done => {
        axios.post(`${baseUrl}/users`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })

    it('get/users/:userid should return an object', done => {
        const userId = 12345
        axios.get(`${baseUrl}/users/${userId}`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })

    it('get/users/:userid should return an object', done => {
        const userId = 12345
        axios.put(`${baseUrl}/users/${userId}`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })
    it('get/users/:userid should return an object', done => {
        const userId = 12345
        axios.delete(`${baseUrl}/users/${userId}`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })
})

describe('/computer', () => {
    it('get/computer should return an object', done => {
        axios.get(`${baseUrl}/computer`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })
    it('post/computer should return an object', done => {
        axios.post(`${baseUrl}/computer`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })
    it('get/computer/:computerid should return an object', done => {
        axios.get(`${baseUrl}/computer/67576576`)
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
        axios.delete(`${baseUrl}/computer/jhgjhghjid`)
            .then(res => {
                expect(res.data).to.be.an.instanceOf(Object)
                done()
            })
    })

}) 