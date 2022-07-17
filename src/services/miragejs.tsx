import { createServer, Model } from 'miragejs';

export function mirageJS() {
    createServer({
        models: {
            transaction: Model
        },

        routes() {
            this.namespace = 'api';

            this.get('/transaction', () => {
                return this.schema.all('transaction')
            })

            this.post('transaction', (schema, request) => {
                const data = JSON.parse(request.requestBody)

                return schema.create('transaction', data)
            })
        }
    })
}