// ==========================================
// ASPIRINE ADMIN PANEL - JAVASCRIPT
// Modern Admin Dashboard with LocalStorage
// ==========================================

// ========== GLOBAL STATE ========== //
let currentSection = 'dashboard';
let adminData = {
    projects: [],
    feedback: [],
    users: [],
    analytics: {
        projectsByMonth: [],
        userGrowth: [],
        revenue: []
    }
};

// ========== INITIALIZATION ========== //
document.addEventListener('DOMContentLoaded', () => {
    initializeAdmin();
    loadData();
    updateDashboard();
    updateCurrentDate();
    setInterval(updateCurrentDate, 60000); // Update every minute
});

function initializeAdmin() {
    console.log('🚀 Aspirine Admin Panel Initialized');

    // Load sample data if no data exists
    if (!localStorage.getItem('aspirineAdminData')) {
        loadSampleData();
    }
}

// ========== DATA MANAGEMENT ========== //
function loadData() {
    const savedData = localStorage.getItem('aspirineAdminData');
    if (savedData) {
        adminData = JSON.parse(savedData);
    }
    updateAllCounts();
    renderAllTables();
}

function saveData() {
    localStorage.setItem('aspirineAdminData', JSON.stringify(adminData));
    updateAllCounts();
}

function loadSampleData() {
    // Sample Projects
    adminData.projects = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            phone: '+91 98765 43210',
            service: 'Web Development',
            budget: '₹25,000 - ₹50,000',
            status: 'pending',
            details: 'Need a modern e-commerce website with payment integration',
            date: new Date('2024-11-20').toISOString()
        },
        {
            id: 2,
            name: 'Sarah Smith',
            email: 'sarah@example.com',
            phone: '+91 98765 43211',
            service: 'Graphic Design',
            budget: '₹10,000 - ₹25,000',
            status: 'active',
            details: 'Logo design and brand identity package',
            date: new Date('2024-11-21').toISOString()
        },
        {
            id: 3,
            name: 'Mike Johnson',
            email: 'mike@example.com',
            phone: '+91 98765 43212',
            service: 'App Development',
            budget: '₹50,000 - ₹1,00,000',
            status: 'completed',
            details: 'iOS and Android fitness tracking app',
            date: new Date('2024-11-18').toISOString()
        }
    ];

    // Sample Feedback
    adminData.feedback = [
        {
            id: 1,
            name: 'Emily Davis',
            email: 'emily@example.com',
            rating: 5,
            message: 'Excellent service! The team delivered beyond expectations.',
            date: new Date('2024-11-22').toISOString()
        },
        {
            id: 2,
            name: 'Robert Brown',
            email: 'robert@example.com',
            rating: 4,
            message: 'Great work, very professional. Minor delays but overall satisfied.',
            date: new Date('2024-11-21').toISOString()
        }
    ];

    // Sample Users
    adminData.users = [
        {
            id: 1,
            name: 'Alice Cooper',
            email: 'alice@example.com',
            authMethod: 'Google',
            registrationDate: new Date('2024-11-15').toISOString(),
            lastLogin: new Date('2024-11-23').toISOString(),
            status: 'active'
        },
        {
            id: 2,
            name: 'Bob Wilson',
            email: 'bob@example.com',
            authMethod: 'Email',
            registrationDate: new Date('2024-11-10').toISOString(),
            lastLogin: new Date('2024-11-22').toISOString(),
            status: 'active'
        }
    ];

    saveData();
}

// ========== NAVIGATION ========== //
function showSection(sectionId) {
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.nav-item').classList.add('active');

    // Update active section
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    // Update page title
    const titles = {
        dashboard: 'Dashboard',
        projects: 'Projects Management',
        feedback: 'Customer Feedback',
        users: 'User Management',
        analytics: 'Analytics & Reports',
        settings: 'Settings'
    };
    document.getElementById('pageTitle').textContent = titles[sectionId] || 'Dashboard';

    currentSection = sectionId;
}

function toggleSidebar() {
    document.querySelector('.admin-sidebar').classList.toggle('active');
}

// ========== DASHBOARD UPDATES ========== //
function updateDashboard() {
    updateStats();
    updateRecentProjects();
    updateRecentFeedback();
}

function updateStats() {
    const totalProjects = adminData.projects.length;
    const totalFeedback = adminData.feedback.length;
    const totalUsers = adminData.users.length;
    const completedProjects = adminData.projects.filter(p => p.status === 'completed').length;

    document.getElementById('totalProjects').textContent = totalProjects;
    document.getElementById('totalFeedback').textContent = totalFeedback;
    document.getElementById('totalUsers').textContent = totalUsers;
    document.getElementById('completedProjects').textContent = completedProjects;
}

function updateAllCounts() {
    document.getElementById('projectCount').textContent = adminData.projects.length;
    document.getElementById('feedbackCount').textContent = adminData.feedback.length;
    document.getElementById('userCount').textContent = adminData.users.length;
}

function updateRecentProjects() {
    const recentProjects = adminData.projects
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

    const container = document.getElementById('recentProjects');

    if (recentProjects.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📁</span>
                <p>No recent projects</p>
            </div>
        `;
        return;
    }

    container.innerHTML = recentProjects.map(project => `
        <div class="recent-item">
            <div class="recent-item-header">
                <span class="recent-item-title">${project.name}</span>
                <span class="recent-item-date">${formatDate(project.date)}</span>
            </div>
            <div class="recent-item-content">
                ${project.service} - ${project.budget}
            </div>
        </div>
    `).join('');
}

function updateRecentFeedback() {
    const recentFeedback = adminData.feedback
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

    const container = document.getElementById('recentFeedback');

    if (recentFeedback.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">💬</span>
                <p>No recent feedback</p>
            </div>
        `;
        return;
    }

    container.innerHTML = recentFeedback.map(feedback => `
        <div class="recent-item">
            <div class="recent-item-header">
                <span class="recent-item-title">${feedback.name}</span>
                <span class="recent-item-date">${formatDate(feedback.date)}</span>
            </div>
            <div class="recent-item-content">
                ${'⭐'.repeat(feedback.rating)} - ${feedback.message.substring(0, 50)}...
            </div>
        </div>
    `).join('');
}

// ========== TABLE RENDERING ========== //
function renderAllTables() {
    renderProjectsTable();
    renderFeedbackTable();
    renderUsersTable();
}

function renderProjectsTable() {
    const tbody = document.getElementById('projectsTableBody');

    if (adminData.projects.length === 0) {
        tbody.innerHTML = `
            <tr class="empty-row">
                <td colspan="9">
                    <div class="empty-state">
                        <span class="empty-icon">📁</span>
                        <p>No projects found</p>
                        <small>Projects submitted through the contact form will appear here</small>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = adminData.projects.map(project => `
        <tr>
            <td>#${project.id}</td>
            <td>${project.name}</td>
            <td>${project.email}</td>
            <td>${project.phone}</td>
            <td>${project.service}</td>
            <td>${project.budget}</td>
            <td><span class="status-badge ${project.status}">${project.status}</span></td>
            <td>${formatDate(project.date)}</td>
            <td>
                <div class="table-actions">
                    <button class="action-btn" onclick="viewDetails('project', ${project.id})">View</button>
                    <button class="action-btn" onclick="editItem('project', ${project.id})">Edit</button>
                    <button class="action-btn danger" onclick="deleteItem('project', ${project.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderFeedbackTable() {
    const tbody = document.getElementById('feedbackTableBody');

    if (adminData.feedback.length === 0) {
        tbody.innerHTML = `
            <tr class="empty-row">
                <td colspan="7">
                    <div class="empty-state">
                        <span class="empty-icon">💬</span>
                        <p>No feedback found</p>
                        <small>User feedback will appear here</small>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = adminData.feedback.map(feedback => `
        <tr>
            <td>#${feedback.id}</td>
            <td>${feedback.name}</td>
            <td>${feedback.email}</td>
            <td>${'⭐'.repeat(feedback.rating)}</td>
            <td>${feedback.message.substring(0, 50)}...</td>
            <td>${formatDate(feedback.date)}</td>
            <td>
                <div class="table-actions">
                    <button class="action-btn" onclick="viewDetails('feedback', ${feedback.id})">View</button>
                    <button class="action-btn danger" onclick="deleteItem('feedback', ${feedback.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderUsersTable() {
    const tbody = document.getElementById('usersTableBody');

    if (adminData.users.length === 0) {
        tbody.innerHTML = `
            <tr class="empty-row">
                <td colspan="8">
                    <div class="empty-state">
                        <span class="empty-icon">👥</span>
                        <p>No users found</p>
                        <small>User login and signup details will appear here</small>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = adminData.users.map(user => `
        <tr>
            <td>#${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.authMethod}</td>
            <td>${formatDate(user.registrationDate)}</td>
            <td>${formatDate(user.lastLogin)}</td>
            <td><span class="status-badge ${user.status}">${user.status}</span></td>
            <td>
                <div class="table-actions">
                    <button class="action-btn" onclick="viewDetails('user', ${user.id})">View</button>
                    <button class="action-btn danger" onclick="deleteItem('user', ${user.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ========== CRUD OPERATIONS ========== //
function viewDetails(type, id) {
    let item;
    let title;
    let content;

    if (type === 'project') {
        item = adminData.projects.find(p => p.id === id);
        title = `Project #${id} - ${item.name}`;
        content = `
            <div style="display: grid; gap: 1rem;">
                <div><strong>Client Name:</strong> ${item.name}</div>
                <div><strong>Email:</strong> ${item.email}</div>
                <div><strong>Phone:</strong> ${item.phone}</div>
                <div><strong>Service:</strong> ${item.service}</div>
                <div><strong>Budget:</strong> ${item.budget}</div>
                <div><strong>Status:</strong> <span class="status-badge ${item.status}">${item.status}</span></div>
                <div><strong>Date:</strong> ${formatDate(item.date)}</div>
                <div><strong>Project Details:</strong><br>${item.details}</div>
            </div>
        `;
    } else if (type === 'feedback') {
        item = adminData.feedback.find(f => f.id === id);
        title = `Feedback #${id} - ${item.name}`;
        content = `
            <div style="display: grid; gap: 1rem;">
                <div><strong>Name:</strong> ${item.name}</div>
                <div><strong>Email:</strong> ${item.email}</div>
                <div><strong>Rating:</strong> ${'⭐'.repeat(item.rating)}</div>
                <div><strong>Date:</strong> ${formatDate(item.date)}</div>
                <div><strong>Message:</strong><br>${item.message}</div>
            </div>
        `;
    } else if (type === 'user') {
        item = adminData.users.find(u => u.id === id);
        title = `User #${id} - ${item.name}`;
        content = `
            <div style="display: grid; gap: 1rem;">
                <div><strong>Name:</strong> ${item.name}</div>
                <div><strong>Email:</strong> ${item.email}</div>
                <div><strong>Auth Method:</strong> ${item.authMethod}</div>
                <div><strong>Registration Date:</strong> ${formatDate(item.registrationDate)}</div>
                <div><strong>Last Login:</strong> ${formatDate(item.lastLogin)}</div>
                <div><strong>Status:</strong> <span class="status-badge ${item.status}">${item.status}</span></div>
            </div>
        `;
    }

    showModal(title, content);
}

function editItem(type, id) {
    if (type === 'project') {
        const project = adminData.projects.find(p => p.id === id);
        const newStatus = prompt('Enter new status (pending/active/completed):', project.status);
        if (newStatus && ['pending', 'active', 'completed'].includes(newStatus)) {
            project.status = newStatus;
            saveData();
            renderProjectsTable();
            updateDashboard();
            showNotification('Project updated successfully!', 'success');
        }
    }
}

function deleteItem(type, id) {
    if (!confirm('Are you sure you want to delete this item?')) return;

    if (type === 'project') {
        adminData.projects = adminData.projects.filter(p => p.id !== id);
    } else if (type === 'feedback') {
        adminData.feedback = adminData.feedback.filter(f => f.id !== id);
    } else if (type === 'user') {
        adminData.users = adminData.users.filter(u => u.id !== id);
    }

    saveData();
    renderAllTables();
    updateDashboard();
    showNotification('Item deleted successfully!', 'success');
}

// ========== MODAL ========== //
function showModal(title, content) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = content;
    document.getElementById('detailModal').classList.add('active');
}

function closeModal() {
    document.getElementById('detailModal').classList.remove('active');
}

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// ========== DATA EXPORT ========== //
function exportData(type) {
    let data;
    let filename;

    if (type === 'projects') {
        data = adminData.projects;
        filename = 'aspirine-projects.json';
    } else if (type === 'feedback') {
        data = adminData.feedback;
        filename = 'aspirine-feedback.json';
    } else if (type === 'users') {
        data = adminData.users;
        filename = 'aspirine-users.json';
    }

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);

    showNotification('Data exported successfully!', 'success');
}

function exportAllData() {
    const dataStr = JSON.stringify(adminData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'aspirine-all-data.json';
    link.click();
    URL.revokeObjectURL(url);

    showNotification('All data exported successfully!', 'success');
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedData = JSON.parse(event.target.result);
                adminData = importedData;
                saveData();
                renderAllTables();
                updateDashboard();
                showNotification('Data imported successfully!', 'success');
            } catch (error) {
                showNotification('Error importing data!', 'error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function clearAllData() {
    if (!confirm('Are you sure you want to clear ALL data? This cannot be undone!')) return;

    adminData = {
        projects: [],
        feedback: [],
        users: [],
        analytics: {
            projectsByMonth: [],
            userGrowth: [],
            revenue: []
        }
    };

    saveData();
    renderAllTables();
    updateDashboard();
    showNotification('All data cleared!', 'success');
}

// ========== REFRESH DATA ========== //
function refreshData(type) {
    loadData();
    showNotification('Data refreshed!', 'success');
}

// ========== NOTIFICATIONS ========== //
function showNotifications() {
    alert('Notifications:\n\n• 3 new project submissions\n• 2 new feedback entries\n• 1 new user registration');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#43e97b' : type === 'error' ? '#f5576c' : '#4facfe'};
        color: white;
        border-radius: 12px;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== UTILITIES ========== //
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function updateCurrentDate() {
    const now = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);
}

// ========== SEARCH ========== //
document.getElementById('globalSearch')?.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // Implement search functionality based on current section
    console.log('Searching for:', searchTerm);
});

// ========== LOGOUT ========== //
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        // Clear admin session
        localStorage.removeItem('aspirineAdminSession');
        // Redirect to login page
        window.location.href = 'admin-login.html';
    }
}

// ========== FORM SUBMISSIONS ========== //
document.querySelectorAll('.settings-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Settings saved successfully!', 'success');
    });
});

// ========== PUBLIC API FOR EXTERNAL FORMS ========== //
// This function can be called from the main website to add new projects
window.addProjectSubmission = function (projectData) {
    const newProject = {
        id: adminData.projects.length + 1,
        name: projectData.name,
        email: projectData.email,
        phone: projectData.phone,
        service: projectData.service,
        budget: projectData.budget,
        status: 'pending',
        details: projectData.details,
        date: new Date().toISOString()
    };

    adminData.projects.push(newProject);
    saveData();
    renderProjectsTable();
    updateDashboard();

    return newProject.id;
};

// Function to add feedback
window.addFeedback = function (feedbackData) {
    const newFeedback = {
        id: adminData.feedback.length + 1,
        name: feedbackData.name,
        email: feedbackData.email,
        rating: feedbackData.rating,
        message: feedbackData.message,
        date: new Date().toISOString()
    };

    adminData.feedback.push(newFeedback);
    saveData();
    renderFeedbackTable();
    updateDashboard();

    return newFeedback.id;
};

// Function to add user
window.addUser = function (userData) {
    const newUser = {
        id: adminData.users.length + 1,
        name: userData.name,
        email: userData.email,
        authMethod: userData.authMethod || 'Email',
        registrationDate: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        status: 'active'
    };

    adminData.users.push(newUser);
    saveData();
    renderUsersTable();
    updateDashboard();

    return newUser.id;
};

console.log('✨ Aspirine Admin Panel - Ready!');
