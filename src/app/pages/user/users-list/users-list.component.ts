import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchUserListData } from '../../../store/User/user-action';
import { selectUserList, selectUserLoading } from '../../../store/User/user-selector';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { MDModalModule } from '../../../Component/modals';
import { MnDropdownComponent } from '../../../Component/dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { NGXPagination } from '../../../Component/pagination';
import { RouterLink } from '@angular/router';
import { AddUserComponent } from "../add-user/add-user.component";
import { SearchPipe } from '../../../shared/search.pipe';
import { FormsModule } from '@angular/forms';
import { User } from '../../../shared/model/user.model';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [PageTitleComponent, NgxDatatableModule, LucideAngularModule, NGXPagination, MDModalModule, MnDropdownComponent, NgSelectModule, CommonModule, RouterLink, AddUserComponent,FormsModule],
  templateUrl: './users-list.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class UsersListComponent {
  userList: User[]=[];

  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: any;
  alluserList: User[] = []
  searchUser:string = '';
  addUser:boolean = false;
  selectedForDelete:number = 0;
  private store = inject(Store)

  ngOnInit(): void {

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchUserListData());
      this.store.select(selectUserLoading).subscribe(data => {
        if (data == false) {
          document.getElementById('elmLoader')?.classList.add('d-none')
        }
      })
      this.store.select(selectUserList).subscribe(data => {
        this.userList = data
        this.alluserList = data
        this.totalItems = this.userList.length;
      });

    }, 250)
  }




  // Pagination
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updatePagedOrders();
  }


  getEndIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalItems)
  }

  updatePagedOrders(): void {
    this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.endIndex = this.startIndex + this.itemsPerPage;
    this.userList = this.userList.slice(this.startIndex, this.endIndex);
  }

  // Search functionality
  onSearchChange() {
    const searchPipe = new SearchPipe();
    this.userList = searchPipe.transform(this.alluserList, this.searchUser);
  }



  columns = [
    { name: 'ID', prop: 'id' },
    { name: 'User No', prop: 'User_No' },
    { name: 'Name', prop: 'User_Name' },
    { name: 'Location', prop: 'Location' },
    { name: 'Email', prop: 'Email' },
    { name: 'Phone Number', prop: 'Phone_Number' },
    { name: 'Action', prop: 'actions' }
  ]


  // 

  onSelectDelete(item:any)
  {
    console.log(item);
    this.selectedForDelete = this.userList[item].User_ID;
    console.log(this.selectedForDelete)
  }
  deleteItem()
  {}
}
