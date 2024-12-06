import Navbar from './navbar';
import Library from '/public/images/Library.jpg';

const Course = () => {
    return (
        <div>
            <Navbar />
            <div className="hero-section">
                <img src={Library} alt="Library" className="hero-image" />
                <div className="welcome-text">
                    <h1>Welcome, [Name]!</h1>
                    <p>Plan your degree and take a step towards your success.</p>
                    <p><strong>Major:</strong> [Mathematics]</p>
                    <p><strong>Graduation Year:</strong> [2026]</p>
                </div>
            </div>
        <article>
            <nav class="nav-tabs">
                <ul class="nav-tabs__list">
                <li>
                    <a class="nav-tabs__link nav-tabs__link--active" href="#">
                    Roadmap 1
                    </a>
                </li>
                <li>
                    <a class="nav-tabs__link" href="#">
                    Roadmap 2
                    </a>
                </li>
                <li>
                    <a class="nav-tabs__link" href="#">
                    Roadmap 3
                    </a>
                </li>
                </ul>
            </nav>
            <div class="roadmap">
                <header class="roadmap__header">
                <h1 class="roadmap__heading">
                    Roadmap 1
                </h1>
                <p>137 students have taken a similar roadmap.</p>
                </header>
                <div class="roadmap__grid">
                
                <section class="roadmap__year">
                    <h2 class="roadmap__year-heading">
                    Year 1
                    </h2>
                    <section class="roadmap__semester">
                    <h3 class="roadmap__semester-heading">
                        Fall
                    </h3>
                    
                    <table class="roadmap__courses" aria-label="Course Table, Fall, Year 1">
                        <thead class="roadmap__courses-header">
                        <tr>
                            <th class="roadmap__courses-heading" scope="col">Course</th>
                            <th class="roadmap__courses-heading" scope="col">Units</th>
                        </tr>
                        </thead>
                        <tbody class="roadmap__courses-body">
                        <tr>
                            <td class="roadmap__courses-cell">Course 1</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 2</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 3</td>
                            <td class="roadmap__courses-cell" data-label="Units">4</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 4</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 5</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        </tbody>
                        <tfoot class="roadmap__courses-footer">
                        <tr>
                            <th class="roadmap__courses-total" scope="row">Total</th>
                            <th class="roadmap__courses-total">16</th>
                        </tr>
                        </tfoot>
                    </table>
                    
                    </section>
                    <section class="roadmap__semester">
                    <h3 class="roadmap__semester-heading">
                        Spring
                    </h3>
                    
                    <table class="roadmap__courses" aria-label="Course Table, Spring, Year 1">
                        <thead class="roadmap__courses-header">
                        <tr>
                            <th class="roadmap__courses-heading" scope="col">Course</th>
                            <th class="roadmap__courses-heading" scope="col">Units</th>
                        </tr>
                        </thead>
                        <tbody class="roadmap__courses-body">
                        <tr>
                            <td class="roadmap__courses-cell">Course 1</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 2</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 3</td>
                            <td class="roadmap__courses-cell" data-label="Units">4</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 4</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 5</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        </tbody>
                        <tfoot class="roadmap__courses-footer">
                        <tr>
                            <th class="roadmap__courses-total" scope="row">Total</th>
                            <th class="roadmap__courses-total">16</th>
                        </tr>
                        </tfoot>
                    </table>
                    
                    </section>
                </section>
            
            
                <section class="roadmap__year">
                    <h2 class="roadmap__year-heading">
                    Year 2
                    </h2>
                    <section class="roadmap__semester">
                    <h3 class="roadmap__semester-heading">
                        Fall
                    </h3>
                    
                    <table class="roadmap__courses" aria-label="Course Table, Fall, Year 2">
                        <thead class="roadmap__courses-header">
                        <tr>
                            <th class="roadmap__courses-heading" scope="col">Course</th>
                            <th class="roadmap__courses-heading" scope="col">Units</th>
                        </tr>
                        </thead>
                        <tbody class="roadmap__courses-body">
                        <tr>
                            <td class="roadmap__courses-cell">Course 1</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 2</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 3</td>
                            <td class="roadmap__courses-cell" data-label="Units">4</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 4</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 5</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        </tbody>
                        <tfoot class="roadmap__courses-footer">
                        <tr>
                            <th class="roadmap__courses-total" scope="row">Total</th>
                            <th class="roadmap__courses-total">16</th>
                        </tr>
                        </tfoot>
                    </table>
                    
                    </section>
                    <section class="roadmap__semester">
                    <h3 class="roadmap__semester-heading">
                        Spring
                    </h3>
                    
                    <table class="roadmap__courses" aria-label="Course Table, Spring, Year 2">
                        <thead class="roadmap__courses-header">
                        <tr>
                            <th class="roadmap__courses-heading" scope="col">Course</th>
                            <th class="roadmap__courses-heading" scope="col">Units</th>
                        </tr>
                        </thead>
                        <tbody class="roadmap__courses-body">
                        <tr>
                            <td class="roadmap__courses-cell">Course 1</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 2</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 3</td>
                            <td class="roadmap__courses-cell" data-label="Units">4</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 4</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 5</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        </tbody>
                        <tfoot class="roadmap__courses-footer">
                        <tr>
                            <th class="roadmap__courses-total" scope="row">Total</th>
                            <th class="roadmap__courses-total">16</th>
                        </tr>
                        </tfoot>
                    </table>
                    
                    </section>
                </section>
                
                <section class="roadmap__year">
                    <h2 class="roadmap__year-heading">
                    Year 3
                    </h2>
                    <section class="roadmap__semester">
                    <h3 class="roadmap__semester-heading">
                        Fall
                    </h3>
                    
                    <table class="roadmap__courses" aria-label="Course Table, Fall, Year 3">
                        <thead class="roadmap__courses-header">
                        <tr>
                            <th class="roadmap__courses-heading" scope="col">Course</th>
                            <th class="roadmap__courses-heading" scope="col">Units</th>
                        </tr>
                        </thead>
                        <tbody class="roadmap__courses-body">
                        <tr>
                            <td class="roadmap__courses-cell">Course 1</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 2</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 3</td>
                            <td class="roadmap__courses-cell" data-label="Units">4</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 4</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 5</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        </tbody>
                        <tfoot class="roadmap__courses-footer">
                        <tr>
                            <th class="roadmap__courses-total" scope="row">Total</th>
                            <th class="roadmap__courses-total">16</th>
                        </tr>
                        </tfoot>
                    </table>
                    
                    </section>
                    <section class="roadmap__semester">
                    <h3 class="roadmap__semester-heading">
                        Spring
                    </h3>
                    
                    <table class="roadmap__courses" aria-label="Course Table, Spring, Year 3">
                        <thead class="roadmap__courses-header">
                        <tr>
                            <th class="roadmap__courses-heading" scope="col">Course</th>
                            <th class="roadmap__courses-heading" scope="col">Units</th>
                        </tr>
                        </thead>
                        <tbody class="roadmap__courses-body">
                        <tr>
                            <td class="roadmap__courses-cell">Course 1</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 2</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 3</td>
                            <td class="roadmap__courses-cell" data-label="Units">4</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 4</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 5</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        </tbody>
                        <tfoot class="roadmap__courses-footer">
                        <tr>
                            <th class="roadmap__courses-total" scope="row">Total</th>
                            <th class="roadmap__courses-total">16</th>
                        </tr>
                        </tfoot>
                    </table>
                    
                    </section>
                </section>
                
                
                <section class="roadmap__year">
                    <h2 class="roadmap__year-heading">
                    Year 4
                    </h2>
                    <section class="roadmap__semester">
                    <h3 class="roadmap__semester-heading">
                        Fall
                    </h3>
                    
                    <table class="roadmap__courses" aria-label="Course Table, Fall, Year 4">
                        <thead class="roadmap__courses-header">
                        <tr>
                            <th class="roadmap__courses-heading" scope="col">Course</th>
                            <th class="roadmap__courses-heading" scope="col">Units</th>
                        </tr>
                        </thead>
                        <tbody class="roadmap__courses-body">
                        <tr>
                            <td class="roadmap__courses-cell">Course 1</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 2</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 3</td>
                            <td class="roadmap__courses-cell" data-label="Units">4</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 4</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 5</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        </tbody>
                        <tfoot class="roadmap__courses-footer">
                        <tr>
                            <th class="roadmap__courses-total" scope="row">Total</th>
                            <th class="roadmap__courses-total">16</th>
                        </tr>
                        </tfoot>
                    </table>
                    
                    </section>
                    <section class="roadmap__semester">
                    <h3 class="roadmap__semester-heading">
                        Spring
                    </h3>
                    
                    <table class="roadmap__courses" aria-label="Course Table, Spring, Year 4">
                        <thead class="roadmap__courses-header">
                        <tr>
                            <th class="roadmap__courses-heading" scope="col">Course</th>
                            <th class="roadmap__courses-heading" scope="col">Units</th>
                        </tr>
                        </thead>
                        <tbody class="roadmap__courses-body">
                        <tr>
                            <td class="roadmap__courses-cell">Course 1</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 2</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 3</td>
                            <td class="roadmap__courses-cell" data-label="Units">4</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 4</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        <tr>
                            <td class="roadmap__courses-cell">Course 5</td>
                            <td class="roadmap__courses-cell" data-label="Units">3</td>
                        </tr>
                        </tbody>
                        <tfoot class="roadmap__courses-footer">
                        <tr>
                            <th class="roadmap__courses-total" scope="row">Total</th>
                            <th class="roadmap__courses-total">16</th>
                        </tr>
                        </tfoot>
                    </table>
                    
                    </section>
                </section>
                
                </div>
            </div>
        </article>
        </div>
    );
};

export default Course;