document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('skala-landing-wrapper');
    if (!wrapper) return;

    const apartments = [
        {
            "Name": "Tipo 1",
            "Features": ["2 habitaciones", "1 Baño", "Cocina", "Parqueadero de carro*", "Sala Comedor"],
            "FloorPlanImageURL": "https://kinku.com.co/wp-content/uploads/2026/05/Tipologias-Apartamentos-Pekin-Pag-Web.png",
            "AreaDetails": { "AreaConstruida": "53,94 m²", "AreaPrivada": "47,15 m²" },
            "Price": "Desde $467.200.000",
            "Badges": ["PISO 2-4"]
        },
        {
            "Name": "Tipo 2",
            "Features": ["2 habitaciones", "1 Baño", "Cocina", "Parqueadero de carro*", "Sala Comedor"],
            "FloorPlanImageURL": "https://kinku.com.co/wp-content/uploads/2026/05/Tipologias-Apartamentos-Pekin-Pag-Web_Tipo-2.png",
            "AreaDetails": { "AreaConstruida": "54,81 m²", "AreaPrivada": "48,37 m²" },
            "Price": "Desde $427.900.000",
            "Badges": ["PISO 2-4"]
        },
        {
            "Name": "Tipo 3",
            "Features": ["2 habitaciones", "1 Baño", "Cocina", "Parqueadero de carro*", "Sala Comedor"],
            "FloorPlanImageURL": "https://kinku.com.co/wp-content/uploads/2026/05/Tipo-3-Sold-out.jpeg",
            "AreaDetails": { "AreaConstruida": "54,81 m²", "AreaPrivada": "47,92 m²" },
            "Price": "Desde $427.700.000",
            "Badges": ["PISO 2-4", "SOLD OUT"]
        },
        {
            "Name": "Tipo 4",
            "Features": ["3 habitaciones", "2 Baños", "Cocina", "Parqueadero de carro*", "Sala Comedor"],
            "FloorPlanImageURL": "https://kinku.com.co/wp-content/uploads/2026/05/Tipologias-Apartamentos-Pekin-Pag-Web_Tipo-4.png",
            "AreaDetails": { "AreaConstruida": "68,17 m²", "AreaPrivada": "59,69 m²" },
            "Price": "Desde $562.500.000",
            "Badges": ["PISO 2-4"]
        },
        {
            "Name": "Tipo 5",
            "Features": ["3 habitaciones", "2 Baños", "Cocina", "Parqueadero de carro*", "Sala Comedor"],
            "FloorPlanImageURL": "https://kinku.com.co/wp-content/uploads/2026/05/Tipologias-Apartamentos-Pekin-Pag-Web_Tipo-5.png",
            "AreaDetails": { "AreaConstruida": "67,28 m²", "AreaPrivada": "59,04 m²" },
            "Price": "Desde $558.000.000",
            "Badges": ["PISO 2-4"]
        }
    ];

    const tabsContainer = wrapper.querySelector('#apartamentos-tabs');
    const cardContainer = wrapper.querySelector('#apartamento-card');

    if (!tabsContainer || !cardContainer) return;

    function getIconForFeature(feature) {
        const text = feature.toLowerCase();
        if (text.includes('habitacion') || text.includes('habitaciones')) return 'fa-solid fa-bed';
        if (text.includes('baño') || text.includes('baños')) return 'fa-solid fa-bath';
        if (text.includes('cocina')) return 'fa-solid fa-utensils';
        if (text.includes('parqueadero')) return 'fa-solid fa-car';
        if (text.includes('sala')) return 'fa-solid fa-couch';
        return 'fa-solid fa-check';
    }

    function renderCard(apartment) {
        const isSoldOut = apartment.Badges.includes("SOLD OUT");
        const pisoBadge = apartment.Badges.find(b => b.includes("PISO"));
        
        let featuresHtml = apartment.Features.map(f => 
            `<div class="apt-feature-item">
                <i class="${getIconForFeature(f)}"></i>
                <span>${f}</span>
            </div>`
        ).join('');

        cardContainer.innerHTML = `
            <div class="apt-card-left">
                <h3 class="apt-name-mobile">${apartment.Name}</h3>
                <div class="apt-features">
                    ${featuresHtml}
                </div>
            </div>
            <div class="apt-card-center">
                <div class="apt-image-wrapper">
                    <img src="${apartment.FloorPlanImageURL}" alt="${apartment.Name}">
                    ${isSoldOut ? '<div class="apt-badge-soldout">SOLD OUT</div>' : ''}
                </div>
            </div>
            <div class="apt-card-right">
                ${pisoBadge ? `<div class="apt-badge-piso">${pisoBadge}</div>` : ''}
                <h3 class="apt-name-desktop">${apartment.Name}</h3>
                
                <div class="apt-area-primary">
                    <span class="apt-area-value">${apartment.AreaDetails.AreaConstruida}</span>
                    <span class="apt-area-label">Área construida</span>
                </div>
                
                <div class="apt-area-secondary">
                    <strong>Área Privada</strong><br>
                    ${apartment.AreaDetails.AreaPrivada}
                </div>
                
                <div class="apt-price">${apartment.Price}</div>
                <div class="apt-terms">Aplican términos y condiciones</div>
            </div>
        `;
    }

    function renderTabs() {
        tabsContainer.innerHTML = '';
        apartments.forEach((apt, index) => {
            const btn = document.createElement('button');
            btn.className = 'apt-tab-btn';
            btn.textContent = apt.Name;
            if (index === 0) btn.classList.add('active');
            
            btn.addEventListener('click', () => {
                // Update active tab
                const allTabs = wrapper.querySelectorAll('.apt-tab-btn');
                allTabs.forEach(t => t.classList.remove('active'));
                btn.classList.add('active');
                
                // Render card
                renderCard(apt);
            });
            
            tabsContainer.appendChild(btn);
        });
    }

    // Initialize
    renderTabs();
    if (apartments.length > 0) {
        renderCard(apartments[0]);
    }
});
