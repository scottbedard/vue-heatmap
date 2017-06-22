import LogoutComponent from 'src/pages/logout/logout';
import Vue from 'vue';
import Vuex from 'vuex';

//
// factory
//
function CreateComponent (options = {}) {
    const store = new Vuex.Store({
        strict: true,
    });

    return new Vue({
        components: {
            'v-logout': LogoutComponent,
        },
        el: document.createElement('div'),
        store,
        ...options,
    });
}

//
// tests
//
describe('logout page', () => {
    it('dispatches user/logout when created', (done) => {
        const vm = CreateComponent({
            data: () => ({ render: false }),
            template: `<v-logout v-if="render" />`,
        });

        const dispatch = sinon.stub(vm.$store, 'dispatch').returns(Promise.resolve());

        vm.render = true;
        vm.$nextTick(() => {
            expect(dispatch).to.have.been.calledWith('user/logout');
            done();
        });
    });
});
