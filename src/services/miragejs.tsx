import { createServer } from 'miragejs';

export function mirageJS() {
    createServer({
        routes() {
            this.namespace = 'api';

            this.get('/transaction', () => {
                return [
                    {
                        id: 1,
                        title: 'Transaction 1',
                        amount: 400,
                        type: 'deposit',
                        category: 'Food',
                        createdAt: new Date(),
                    }
                ]
            })
        }
    })
}