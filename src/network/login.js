import { request } from './request'

export function reqLogin(user) {
    return request({
        method: 'post',
        url: './login',
        data: {
            name: user.name,
            password: user.password
        }
    })
}

export function test() {
    return request({
        method: 'post',
        url: './test',
    })
}