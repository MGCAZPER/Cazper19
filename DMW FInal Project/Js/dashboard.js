// Basic dashboard logic: localStorage-backed data and Chart.js charts
(function (){
    const role = localStorage.getItem('userRole') || 'Officer';
    const userName = localStorage.getItem('userName') || '';
    document.getElementById('userRole').textContent = role + (userName? (' • ' + userName): '');

    document.getElementById('btnLogout').addEventListener('click', ()=>{
        localStorage.removeItem('userRole');
        localStorage.removeItem('userName');
        window.location.href = 'Login.html';
    });

    // DOM panels
    const teamPanel = document.getElementById('teamPanel');
    const officerPanel = document.getElementById('officerPanel');
    const manageUsersPanel = document.getElementById('manageUsersPanel');
    const navUsers = document.getElementById('navUsers');

    if (role === 'Team' && teamPanel) teamPanel.classList.remove('d-none');
    if (role === 'Officer' && officerPanel) officerPanel.classList.remove('d-none');
    if (role === 'CEO') {
        if (manageUsersPanel) manageUsersPanel.classList.remove('d-none');
        if (navUsers) navUsers.classList.remove('d-none');
    }

    // production data store
    function loadData(){
        const raw = localStorage.getItem('productionData');
        if (!raw) {
            const seed = [
                {id:1,product:'Widget A',stage:'Stage 1',quantity:120,date: '2026-01-10',checked:false},
                {id:2,product:'Widget A',stage:'Stage 2',quantity:80,date: '2026-01-12',checked:true},
                {id:3,product:'Widget B',stage:'Stage 3',quantity:40,date: '2026-01-15',checked:false}
            ];
            localStorage.setItem('productionData', JSON.stringify(seed));
            return seed;
        }
        return JSON.parse(raw);
    }
    function saveData(d){ localStorage.setItem('productionData', JSON.stringify(d)); }

    let data = loadData();

    // Charts init
    const barCtx = document.getElementById('barChart').getContext('2d');
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const doughCtx = document.getElementById('doughnutChart').getContext('2d');

    const chartColors = {gold:'#d4af37',green:'#28a745',red:'#d9534f',muted:'#444'};
    const barChart = new Chart(barCtx, {type:'bar',data:{labels:['Stage 1','Stage 2','Stage 3'],datasets:[{label:'Quantity',data:[0,0,0],backgroundColor:[chartColors.gold,chartColors.green,chartColors.red]}]},options:{responsive:true,plugins:{legend:{display:false}}}});

    const lineChart = new Chart(lineCtx, {type:'line',data:{labels:[],datasets:[{label:'Production',data:[],borderColor:chartColors.gold,backgroundColor:'rgba(212,175,55,0.12)',fill:true}]},options:{responsive:true}});

    const doughChart = new Chart(doughCtx, {type:'doughnut',data:{labels:['Stage 1','Stage 2','Stage 3'],datasets:[{data:[0,0,0],backgroundColor:[chartColors.gold,chartColors.green,chartColors.red]}]},options:{responsive:true,plugins:{legend:{position:'bottom'}}}});

    function aggregate(){
        const agg = {'Stage 1':0,'Stage 2':0,'Stage 3':0};
        const byDate = {};
        data.forEach(d=>{
            agg[d.stage] = (agg[d.stage]||0) + Number(d.quantity);
            const day = d.date || new Date().toISOString().slice(0,10);
            byDate[day] = (byDate[day]||0) + Number(d.quantity);
        });
        return {agg,byDate};
    }

    function updateCharts(){
        const {agg,byDate} = aggregate();
        barChart.data.datasets[0].data = [agg['Stage 1'],agg['Stage 2'],agg['Stage 3']];
        barChart.update();

        const sortedDates = Object.keys(byDate).sort();
        lineChart.data.labels = sortedDates;
        lineChart.data.datasets[0].data = sortedDates.map(d=>byDate[d]);
        lineChart.update();

        doughChart.data.datasets[0].data = [agg['Stage 1'],agg['Stage 2'],agg['Stage 3']];
        doughChart.update();
    }

    function renderIncoming(){
        const list = document.getElementById('incomingList');
        if (list) list.innerHTML = '';
        // populate recent table
        const table = document.querySelector('#recentTable tbody');
        if (table) table.innerHTML = '';
        data.slice().reverse().forEach(item=>{
            if (list){
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.innerHTML = `<div><strong>${item.product}</strong> <small class='text-muted'>${item.stage}</small><div class='small text-muted'>${item.quantity} units • ${item.date}</div></div>`;
                const btn = document.createElement('button');
                btn.className = 'btn btn-sm ' + (item.checked? 'btn-success':'btn-outline-primary');
                btn.textContent = item.checked? 'Checked':'Mark';
                btn.onclick = ()=>{ item.checked = true; saveData(data); renderIncoming(); updateCharts(); };
                li.appendChild(btn);
                list.appendChild(li);
            }
            if (table){
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${item.date}</td><td>${item.product}</td><td>${item.stage}</td><td>${item.quantity}</td><td>${item.checked?'<span class="badge bg-success">Checked</span>':'<span class="badge bg-warning text-dark">Pending</span>'}</td>`;
                table.appendChild(tr);
            }
        });
    }

    // Users management (CEO)
    function loadUsers(){
        return JSON.parse(localStorage.getItem('users') || 'null') || [];
    }
    function saveUsers(u){ localStorage.setItem('users', JSON.stringify(u)); }

    function renderUsers(){
        const users = loadUsers();
        const ul = document.getElementById('userList');
        if (!ul) return;
        ul.innerHTML = '';
        users.forEach((u,idx)=>{
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `<div><strong>${u.name || u.email}</strong><div class='small text-muted'>${u.email}</div></div>`;
            const roleSel = document.createElement('select');
            roleSel.className = 'form-select form-select-sm me-2';
            ['CEO','Team','Officer'].forEach(r=>{ const o = document.createElement('option'); o.value=r; o.textContent=r; if (u.role===r) o.selected=true; roleSel.appendChild(o); });
            roleSel.onchange = ()=>{ users[idx].role = roleSel.value; saveUsers(users); location.reload(); };
            const del = document.createElement('button');
            del.className = 'btn btn-sm btn-outline-danger';
            del.textContent = 'Delete';
            del.onclick = ()=>{ if(confirm('Delete user?')){ users.splice(idx,1); saveUsers(users); renderUsers(); } };
            const wrap = document.createElement('div'); wrap.className='d-flex align-items-center';
            wrap.appendChild(roleSel); wrap.appendChild(del);
            li.appendChild(wrap);
            ul.appendChild(li);
        });
    }

    const createUserForm = document.getElementById('createUserForm');
    if (createUserForm) createUserForm.addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('newName').value.trim();
        const email = document.getElementById('newEmail').value.trim().toLowerCase();
        const password = document.getElementById('newPassword').value;
        const roleSel = document.getElementById('newRole').value;
        if (!email || !password) { alert('Email and password required'); return; }
        const users = loadUsers();
        if (users.find(u=>u.email===email)) { alert('User already exists'); return; }
        users.push({name, email, password, role:roleSel});
        saveUsers(users);
        renderUsers();
        createUserForm.reset();
    });

    // render initial users list when CEO
    if (manageUsersPanel) renderUsers();

    function renderStats(){
        // old stats panel
        const stats = document.getElementById('stats');
        if (stats){
            stats.innerHTML = '';
            const {agg} = aggregate();
            const total = agg['Stage 1']+agg['Stage 2']+agg['Stage 3'];
            const nodes = [
                {label:'Total',value:total},
                {label:'Stage 1',value:agg['Stage 1']},
                {label:'Stage 2',value:agg['Stage 2']},
                {label:'Stage 3',value:agg['Stage 3']}
            ];
            nodes.forEach(n=>{
                const el = document.createElement('div');
                el.className = 'd-flex justify-content-between align-items-center p-2';
                el.innerHTML = `<div class='small text-muted'>${n.label}</div><div class='h6 mb-0'>${n.value}</div>`;
                stats.appendChild(el);
            });
        }

        // stat cards
        const {agg,byDate} = aggregate();
        const total = agg['Stage 1']+agg['Stage 2']+agg['Stage 3'];
        const completed = data.filter(d=>d.checked).reduce((s,x)=>s+Number(x.quantity),0);
        const inProgress = total - completed;
        const pending = data.filter(d=>d.stage==='Stage 3' && !d.checked).reduce((s,x)=>s+Number(x.quantity),0);
        const elTotal = document.getElementById('statTotal'); if (elTotal) elTotal.textContent = total;
        const elIn = document.getElementById('statInProgress'); if (elIn) elIn.textContent = inProgress;
        const elComp = document.getElementById('statCompleted'); if (elComp) elComp.textContent = completed;
        const elPend = document.getElementById('statPending'); if (elPend) elPend.textContent = pending;
    }

    // initial render
    updateCharts(); renderIncoming(); renderStats();

    // Team add form
    const addForm = document.getElementById('addForm');
    if (addForm) addForm.addEventListener('submit', function(e){
        e.preventDefault();
        const product = document.getElementById('product').value.trim();
        const stage = document.getElementById('stage').value;
        const quantity = Number(document.getElementById('quantity').value);
        const entry = {id: Date.now(), product, stage, quantity, date: new Date().toISOString().slice(0,10), checked:false};
        data.push(entry); saveData(data);
        document.getElementById('product').value=''; document.getElementById('quantity').value='';
        updateCharts(); renderIncoming(); renderStats();
    });

})();
